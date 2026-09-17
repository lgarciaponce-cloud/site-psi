import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Upload,
  Link as LinkIcon,
  RotateCcw,
  Check,
  Plus,
  Trash2,
  Image as ImageIcon,
  Camera,
  AlertCircle
} from "lucide-react";
import {
  useImageManager,
  SECTION_IMAGE_CONFIGS,
  SECTION_NAMES_FOR_GALLERY
} from "../context/ImageContext";

export const ImageManagerModal: React.FC = () => {
  const {
    images,
    sectionGalleries,
    updateImage,
    resetImage,
    resetAllImages,
    addImageToSection,
    removeImageFromSection,
    isManagerOpen,
    closeManager,
    selectedKeyForEdit,
    selectedSectionForAdd
  } = useImageManager();

  const [activeTab, setActiveTab] = useState<"replace" | "add">("replace");
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Estados para inclusão de nova foto
  const [selectedSection, setSelectedSection] = useState<string>("sobre");
  const [newPhotoUrl, setNewPhotoUrl] = useState<string>("");
  const [newPhotoCaption, setNewPhotoCaption] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const newPhotoFileInputRef = useRef<HTMLInputElement | null>(null);

  // Sincronizar foco se aberto direcionado a uma imagem específica ou seção
  useEffect(() => {
    if (selectedKeyForEdit) {
      setActiveTab("replace");
      setEditingKey(selectedKeyForEdit);
    } else if (selectedSectionForAdd) {
      setActiveTab("add");
      setSelectedSection(selectedSectionForAdd);
    }
  }, [selectedKeyForEdit, selectedSectionForAdd, isManagerOpen]);

  // Limpar mensagens ao fechar
  useEffect(() => {
    if (!isManagerOpen) {
      setStatusMessage(null);
      setUrlInput("");
      setNewPhotoUrl("");
      setNewPhotoCaption("");
    }
  }, [isManagerOpen]);

  if (!isManagerOpen) return null;

  // Processar arquivo de upload para Base64
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, targetKey?: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setStatusMessage({ text: "Por favor, selecione um arquivo de imagem válido.", type: "error" });
      return;
    }

    // Leitura do arquivo
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (targetKey) {
        updateImage(targetKey, result);
        setStatusMessage({ text: "Imagem substituída com sucesso!", type: "success" });
      } else {
        setNewPhotoUrl(result);
        setStatusMessage({ text: "Foto carregada. Preencha os detalhes e clique em Salvar.", type: "success" });
      }
    };
    reader.onerror = () => {
      setStatusMessage({ text: "Erro ao ler o arquivo selecionado.", type: "error" });
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleApplyUrl = (targetKey: string) => {
    if (!urlInput.trim()) return;
    updateImage(targetKey, urlInput.trim());
    setUrlInput("");
    setStatusMessage({ text: "Imagem atualizada com o link fornecido!", type: "success" });
  };

  const handleAddNewPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoUrl.trim()) {
      setStatusMessage({ text: "Selecione uma foto do seu computador ou informe a URL da imagem.", type: "error" });
      return;
    }

    addImageToSection(selectedSection, {
      url: newPhotoUrl.trim(),
      caption: newPhotoCaption.trim()
    });

    setNewPhotoUrl("");
    setNewPhotoCaption("");
    setStatusMessage({ text: "Nova foto adicionada à seção com sucesso!", type: "success" });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={closeManager}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-[#ffffff] rounded-[20px] shadow-2xl border border-[#badbde] max-w-4xl w-full my-6 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <div className="p-4 sm:p-6 bg-[#fafafa] border-b border-[#badbde] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#badbde]/50 flex items-center justify-center text-[#8b4a7a]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-[#8b4a7a]">
                Gerenciador Manual de Imagens
              </h2>
              <p className="text-xs sm:text-sm text-[#666666]">
                Substitua qualquer foto existente ou adicione novas fotos às seções
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeManager}
            className="p-2 text-[#8b4a7a] hover:bg-[#badbde]/30 rounded-full transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notificações temporárias */}
        {statusMessage && (
          <div
            className={`px-6 py-2.5 text-xs sm:text-sm flex items-center justify-between ${
              statusMessage.type === "success"
                ? "bg-emerald-50 text-emerald-800 border-b border-emerald-200"
                : "bg-rose-50 text-rose-800 border-b border-rose-200"
            }`}
          >
            <div className="flex items-center gap-2">
              {statusMessage.type === "success" ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600" />
              )}
              <span>{statusMessage.text}</span>
            </div>
            <button
              type="button"
              onClick={() => setStatusMessage(null)}
              className="text-xs underline opacity-70 hover:opacity-100"
            >
              Fechar
            </button>
          </div>
        )}

        {/* Abas de Navegação */}
        <div className="flex border-b border-[#badbde] bg-[#ffffff] px-4 sm:px-6 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("replace")}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "replace"
                ? "border-[#d228a7] text-[#d228a7]"
                : "border-transparent text-[#666666] hover:text-[#8b4a7a]"
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Substituir Fotos Existentes</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("add")}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "add"
                ? "border-[#d228a7] text-[#d228a7]"
                : "border-transparent text-[#666666] hover:text-[#8b4a7a]"
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Incluir Novas Fotos nas Seções</span>
          </button>
        </div>

        {/* Conteúdo da Aba 1: Substituição de Fotos Existentes */}
        {activeTab === "replace" && (
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
            <div className="flex items-center justify-between text-xs text-[#666666] mb-2">
              <span>Selecione uma foto para alterar pelo seu computador ou por link:</span>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Deseja restaurar todas as fotos originais padrão?")) {
                    resetAllImages();
                    setStatusMessage({ text: "Todas as imagens foram restauradas para o padrão.", type: "success" });
                  }
                }}
                className="text-xs text-[#8b4a7a] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restaurar todas para o padrão</span>
              </button>
            </div>

            {/* Input oculto compartilhado para upload */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={(e) => editingKey && handleFileUpload(e, editingKey)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SECTION_IMAGE_CONFIGS.map((config) => {
                const isSelected = editingKey === config.key;
                const currentImg = images[config.key] || config.defaultUrl;

                return (
                  <div
                    key={config.key}
                    className={`rounded-[16px] border p-4 transition-all ${
                      isSelected
                        ? "border-[#d228a7] bg-[#fafafa] shadow-md ring-2 ring-[#d228a7]/20"
                        : "border-[#badbde] bg-[#ffffff] hover:border-[#c084b8]"
                    }`}
                  >
                    <div className="flex gap-4 items-start">
                      {/* Thumbnail da foto atual */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-[12px] overflow-hidden border border-[#badbde] bg-[#f0f4f5] flex items-center justify-center relative">
                        <img
                          src={currentImg}
                          alt={config.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Informações da foto */}
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-bold text-[#8b4a7a] bg-[#c5e6e8]/40 rounded-full mb-1">
                          {config.sectionName}
                        </span>
                        <h3 className="font-bold text-sm text-[#333333] truncate">
                          {config.title}
                        </h3>
                        <p className="text-xs text-[#666666] line-clamp-2 mt-0.5">
                          {config.description}
                        </p>

                        {/* Botões de Ação */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingKey(config.key);
                              fileInputRef.current?.click();
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#d228a7] hover:bg-[#b01e8c] text-white text-xs font-semibold rounded-[8px] shadow-2xs transition-colors cursor-pointer"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>Carregar do PC</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setEditingKey(isSelected ? null : config.key);
                              setUrlInput("");
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ffffff] hover:bg-[#fafafa] text-[#8b4a7a] text-xs font-medium border border-[#badbde] rounded-[8px] transition-colors cursor-pointer"
                          >
                            <LinkIcon className="w-3.5 h-3.5" />
                            <span>Link URL</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              resetImage(config.key);
                              setStatusMessage({ text: `Foto '${config.title}' restaurada para a original.`, type: "success" });
                            }}
                            title="Restaurar foto original padrão"
                            className="inline-flex items-center p-1.5 text-[#666666] hover:text-[#8b4a7a] hover:bg-[#fafafa] rounded-[8px] border border-transparent hover:border-[#badbde] transition-colors cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Caixa para inserção de URL quando selecionado */}
                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-[#badbde]/60 flex flex-col sm:flex-row gap-2">
                        <input
                          type="url"
                          placeholder="Cole o link da imagem (https://...)"
                          value={urlInput}
                          onChange={(e) => setUrlInput(e.target.value)}
                          className="flex-1 px-3 py-1.5 text-xs rounded-[8px] border border-[#badbde] focus:outline-none focus:border-[#d228a7]"
                        />
                        <button
                          type="button"
                          onClick={() => handleApplyUrl(config.key)}
                          className="px-4 py-1.5 bg-[#8b4a7a] text-white text-xs font-semibold rounded-[8px] hover:bg-[#723b64] transition-colors cursor-pointer"
                        >
                          Aplicar Link
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Conteúdo da Aba 2: Inclusão de Novas Fotos */}
        {activeTab === "add" && (
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
            <form onSubmit={handleAddNewPhotoSubmit} className="bg-[#fafafa] p-4 sm:p-5 rounded-[16px] border border-[#badbde] space-y-4">
              <h3 className="font-bold text-sm sm:text-base text-[#8b4a7a] flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#d228a7]" />
                Adicionar Nova Foto a uma Seção
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Seleção de Seção */}
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">
                    Selecione a Seção de Destino:
                  </label>
                  <select
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white rounded-[8px] border border-[#badbde] focus:outline-none focus:border-[#d228a7]"
                  >
                    {SECTION_NAMES_FOR_GALLERY.map((sec) => (
                      <option key={sec.id} value={sec.id}>
                        {sec.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Legenda Opcional */}
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">
                    Legenda da Foto (Opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Consultório de atendimento, Livro de leitura, etc."
                    value={newPhotoCaption}
                    onChange={(e) => setNewPhotoCaption(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white rounded-[8px] border border-[#badbde] focus:outline-none focus:border-[#d228a7]"
                  />
                </div>
              </div>

              {/* Upload ou URL da nova foto */}
              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">
                  Origem da Foto:
                </label>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <input
                    type="file"
                    ref={newPhotoFileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e)}
                  />

                  <button
                    type="button"
                    onClick={() => newPhotoFileInputRef.current?.click()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#d228a7] hover:bg-[#b01e8c] text-white text-xs font-semibold rounded-[8px] transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Escolher Foto do Computador</span>
                  </button>

                  <span className="text-xs text-[#666666]">ou cole o link:</span>

                  <input
                    type="url"
                    placeholder="https://exemplo.com/foto.jpg"
                    value={newPhotoUrl}
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    className="flex-1 w-full px-3 py-2 text-xs bg-white rounded-[8px] border border-[#badbde] focus:outline-none focus:border-[#d228a7]"
                  />
                </div>
              </div>

              {/* Pré-visualização da imagem a ser incluída */}
              {newPhotoUrl && (
                <div className="flex items-center gap-4 p-3 bg-white rounded-[12px] border border-[#badbde]">
                  <img
                    src={newPhotoUrl}
                    alt="Pré-visualização"
                    className="w-20 h-20 object-cover rounded-[8px] border border-[#badbde]"
                  />
                  <div className="flex-1 text-xs">
                    <p className="font-semibold text-[#333333]">Pré-visualização da Imagem</p>
                    <p className="text-[#666666] mt-0.5">{newPhotoCaption || "Sem legenda"}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNewPhotoUrl("")}
                    className="text-xs text-[#e03131] hover:underline"
                  >
                    Remover
                  </button>
                </div>
              )}

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={!newPhotoUrl}
                  className="px-5 py-2.5 bg-[#8b4a7a] hover:bg-[#723b64] disabled:opacity-50 text-white text-xs sm:text-sm font-semibold rounded-[8px] shadow-sm transition-colors cursor-pointer"
                >
                  + Salvar e Incluir na Seção
                </button>
              </div>
            </form>

            {/* Listagem de fotos já adicionadas */}
            <div>
              <h4 className="font-bold text-sm text-[#8b4a7a] mb-3">
                Fotos Adicionadas Atualmente por Seção:
              </h4>

              <div className="space-y-4">
                {SECTION_NAMES_FOR_GALLERY.map((sec) => {
                  const items = sectionGalleries[sec.id] || [];
                  if (items.length === 0) return null;

                  return (
                    <div key={sec.id} className="border border-[#badbde] rounded-[12px] p-4 bg-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-xs sm:text-sm text-[#333333]">
                          {sec.label} ({items.length} {items.length === 1 ? "foto" : "fotos"})
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                        {items.map((img) => (
                          <div key={img.id} className="relative group rounded-[8px] overflow-hidden border border-[#badbde] aspect-square">
                            <img src={img.url} alt={img.caption || ""} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                              <button
                                type="button"
                                onClick={() => removeImageFromSection(sec.id, img.id)}
                                title="Excluir foto"
                                className="p-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-xs"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            {img.caption && (
                              <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] p-1 truncate">
                                {img.caption}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {SECTION_NAMES_FOR_GALLERY.every((sec) => (sectionGalleries[sec.id] || []).length === 0) && (
                  <div className="p-6 text-center text-xs text-[#666666] border border-dashed border-[#badbde] rounded-[12px]">
                    Nenhuma foto adicional foi incluída ainda. Use o formulário acima para adicionar fotos complementares às seções.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Rodapé do Modal */}
        <div className="p-4 bg-[#fafafa] border-t border-[#badbde] flex items-center justify-between">
          <span className="text-[11px] text-[#666666]">
            As imagens personalizadas são salvas automaticamente no seu navegador.
          </span>
          <button
            type="button"
            onClick={closeManager}
            className="px-4 py-2 bg-[#8b4a7a] hover:bg-[#723b64] text-white text-xs font-semibold rounded-[8px] transition-colors cursor-pointer"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
