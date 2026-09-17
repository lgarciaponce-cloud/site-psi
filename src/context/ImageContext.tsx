import React, { createContext, useContext, useState, useEffect } from "react";
import { LINKS } from "../data";
import casinhaImg from "../assets/images/larissa_casinha_editada_1788871779656.jpg";
import coracaoImg from "../assets/images/larissa_coracao_supervisao_1788871370326.jpg";
import escrevendoImg from "../assets/images/larissa_escrevendo_publicacoes_1788871569572.jpg";
import blazerLavandaImg from "../assets/images/larissa_blazer_lavanda_1789077130604.jpg";
import mikaelyImg from "../assets/images/mikaely_vaz_avatar_1788871929553.jpg";
import laraImg from "../assets/images/lara_balera_avatar_1788872064114.jpg";
import fernandaImg from "../assets/images/fernanda_valentim_avatar_1788872182362.jpg";
import marcelaImg from "../assets/images/marcela_rezende_avatar_1788872484341.jpg";
import janaynaImg from "../assets/images/janayna_longhi_avatar_1788872633501.jpg";
import vaneilaImg from "../assets/images/vaneila_buaszik_avatar_1788872782070.jpg";
import aryaneImg from "../assets/images/aryane_penteado_avatar_1788872937715.jpg";
import ginaImg from "../assets/images/gina_carlos_avatar_1788873070526.jpg";
import sylvelaineImg from "../assets/images/sylvelaine_mendonca_avatar_1788873211799.jpg";
import adnnaImg from "../assets/images/adnna_coqui_avatar_1788878065723.jpg";
import eloisaImg from "../assets/images/eloisa_dib_avatar_1788878243379.jpg";
import grupoEstudosImg from "../assets/images/grupo_de_estudos.jpg";

export interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  dateAdded: string;
}

export interface SectionImageConfig {
  key: string;
  title: string;
  sectionName: string;
  description: string;
  defaultUrl: string;
  aspectRatio?: string;
}

export const SECTION_IMAGE_CONFIGS: SectionImageConfig[] = [
  {
    key: "logo",
    title: "Logotipo do Consultório",
    sectionName: "Cabeçalho (Header)",
    description: "Exibido no topo da página e na navegação.",
    defaultUrl: "/logo-oficial.png"
  },
  {
    key: "photoSobre",
    title: "Foto Principal de Apresentação",
    sectionName: "Sobre Mim (Início)",
    description: "Retrato principal de Larissa Ponce em destaque no topo da página.",
    defaultUrl: blazerLavandaImg
  },
  {
    key: "photoSupervisao",
    title: "Foto de Supervisão Clínica",
    sectionName: "Supervisão Clínica",
    description: "Imagem que ilustra o acompanhamento de casos e orientação clínica.",
    defaultUrl: coracaoImg
  },
  {
    key: "photoPsicanalise",
    title: "Foto de Atendimento Psicanalítico",
    sectionName: "Psicanálise Winnicottiana",
    description: "Fotografia do consultório e ambiente terapêutico com lightbox.",
    defaultUrl: LINKS.photoPsicanalise
  },
  {
    key: "photoPublicacoes",
    title: "Foto de Pesquisa e Escrita Clínica",
    sectionName: "Publicações (Foto 1 - Pesquisa)",
    description: "Fotografia de Larissa Ponce escrevendo e pesquisando em seu caderno de estudos.",
    defaultUrl: escrevendoImg
  },
  {
    key: "photoBiblioteca",
    title: "Foto da Biblioteca / Espaço de Leitura",
    sectionName: "Publicações (Foto 2 - Pesquisa)",
    description: "Fotografia da biblioteca e ambiente de pesquisa teórica psicanalítica.",
    defaultUrl: LINKS.photoBiblioteca
  },
  {
    key: "photoCasinha",
    title: "Foto com a Casinha de Madeira",
    sectionName: "Conteúdo Contínuo & Redes Sociais",
    description: "Fotografia com a casinha de madeira no consultório com certificados ao fundo.",
    defaultUrl: casinhaImg
  },
  {
    key: "testimonialMikaely",
    title: "Foto de Mikaely Vaz (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Mikaely Vaz exibida na seção de ressonâncias.",
    defaultUrl: mikaelyImg
  },
  {
    key: "testimonialLara",
    title: "Foto de Lara Balera (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Lara Balera exibida na seção de ressonâncias.",
    defaultUrl: laraImg
  },
  {
    key: "testimonialFernanda",
    title: "Foto de Fernanda Valentim (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Fernanda Valentim exibida na seção de ressonâncias.",
    defaultUrl: fernandaImg
  },
  {
    key: "testimonialMarcela",
    title: "Foto de Marcela de Sá Rezende (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Marcela de Sá Rezende exibida na seção de ressonâncias.",
    defaultUrl: marcelaImg
  },
  {
    key: "testimonialJanayna",
    title: "Foto de Janayna Longhi (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Janayna Longhi exibida na seção de ressonâncias.",
    defaultUrl: janaynaImg
  },
  {
    key: "testimonialVaneila",
    title: "Foto de Vaneila Buaszik (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Vaneila Buaszik exibida na seção de ressonâncias.",
    defaultUrl: vaneilaImg
  },
  {
    key: "testimonialAryane",
    title: "Foto de Aryane Penteado (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Aryane Penteado exibida na seção de ressonâncias.",
    defaultUrl: aryaneImg
  },
  {
    key: "testimonialGina",
    title: "Foto de Gina Paula Talon Carlos (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Gina Paula Talon Carlos exibida na seção de ressonâncias.",
    defaultUrl: ginaImg
  },
  {
    key: "testimonialSylvelaine",
    title: "Foto de Sylvelaine Mendonça (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Sylvelaine Mendonça exibida na seção de ressonâncias.",
    defaultUrl: sylvelaineImg
  },
  {
    key: "testimonialAdnna",
    title: "Foto de Adnna Coqui (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Adnna Coqui exibida na seção de ressonâncias.",
    defaultUrl: adnnaImg
  },
  {
    key: "testimonialEloisa",
    title: "Foto de Eloisa Dib (Depoimento)",
    sectionName: "Ressonâncias da Imersão (Depoimentos)",
    description: "Fotografia da participante Eloisa Dib exibida na seção de ressonâncias.",
    defaultUrl: eloisaImg
  },
  {
    key: "grupoEstudos",
    title: "Banner do Grupo de Estudo",
    sectionName: "Grupo de Estudo",
    description: "Imagem em destaque do Grupo de Estudo Winnicott e a Psicodinâmica.",
    defaultUrl: grupoEstudosImg
  }
];

export const SECTION_NAMES_FOR_GALLERY: { id: string; label: string }[] = [
  { id: "sobre", label: "Sobre Larissa Ponce" },
  { id: "supervisao", label: "Supervisão Clínica" },
  { id: "psicanalise", label: "Psicanálise Winnicottiana" },
  { id: "publicacoes", label: "Publicações e Artigos" },
  { id: "conteudo", label: "Conteúdo e Redes Sociais" },
  { id: "consultorio", label: "Consultório e Espaço Clínico" },
  { id: "grupos-estudo", label: "Grupo de Estudo" }
];

interface ImageContextType {
  images: Record<string, string>;
  sectionGalleries: Record<string, GalleryImage[]>;
  updateImage: (key: string, newUrlOrData: string) => void;
  resetImage: (key: string) => void;
  resetAllImages: () => void;
  addImageToSection: (sectionId: string, image: { url: string; caption?: string }) => void;
  removeImageFromSection: (sectionId: string, imageId: string) => void;
  isManagerOpen: boolean;
  openManager: (targetKey?: string, targetSection?: string) => void;
  closeManager: () => void;
  selectedKeyForEdit: string | null;
  selectedSectionForAdd: string | null;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const STORAGE_KEY_MAIN = "lp_custom_images_v9";
const STORAGE_KEY_GALLERY = "lp_section_galleries_v9";

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Construir mapa de imagens oficiais definitivas
  const getDefaultMap = () => {
    const defaultMap: Record<string, string> = {};
    SECTION_IMAGE_CONFIGS.forEach((cfg) => {
      defaultMap[cfg.key] = cfg.defaultUrl;
    });
    return defaultMap;
  };

  // Inicialização com as imagens oficiais definitivas
  const [images, setImages] = useState<Record<string, string>>(() => {
    try {
      // Limpeza de chaves antigas que continham referências obsoletas
      localStorage.removeItem("lp_custom_images");
      localStorage.removeItem("lp_custom_images_v2");
      localStorage.removeItem("lp_custom_images_v3");
      localStorage.removeItem("lp_custom_images_v4");
      localStorage.removeItem("lp_custom_images_v5");
      localStorage.removeItem("lp_custom_images_v6");
      localStorage.removeItem("lp_custom_images_v7");
      localStorage.removeItem("lp_custom_images_v8");
      const stored = localStorage.getItem(STORAGE_KEY_MAIN);
      if (stored) {
        return { ...getDefaultMap(), ...JSON.parse(stored) };
      }
    } catch {
      // Ignore storage errors
    }
    return getDefaultMap();
  });

  // Garantir limpeza de legados no mount
  useEffect(() => {
    try {
      localStorage.removeItem("lp_custom_images");
      localStorage.removeItem("lp_custom_images_v2");
      localStorage.removeItem("lp_custom_images_v3");
      localStorage.removeItem("lp_custom_images_v4");
      localStorage.removeItem("lp_custom_images_v5");
      localStorage.removeItem("lp_custom_images_v6");
      localStorage.removeItem("lp_custom_images_v7");
      localStorage.removeItem("lp_custom_images_v8");
    } catch {
      // Ignore
    }
  }, []);

  // Inicialização de galerias das seções (inclusão de imagens)
  const [sectionGalleries, setSectionGalleries] = useState<Record<string, GalleryImage[]>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_GALLERY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Ignore localstorage errors
    }
    return {
      sobre: [],
      supervisao: [],
      psicanalise: [],
      publicacoes: [],
      conteudo: [],
      consultorio: []
    };
  });

  // Modal de gerenciamento
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [selectedKeyForEdit, setSelectedKeyForEdit] = useState<string | null>(null);
  const [selectedSectionForAdd, setSelectedSectionForAdd] = useState<string | null>(null);

  // Persistir alterações de imagens principais
  const updateImage = (key: string, newUrlOrData: string) => {
    setImages((prev) => {
      const updated = { ...prev, [key]: newUrlOrData };
      try {
        localStorage.setItem(STORAGE_KEY_MAIN, JSON.stringify(updated));
      } catch (err) {
        console.warn("Storage quota exceeded", err);
      }
      return updated;
    });
  };

  const resetImage = (key: string) => {
    const config = SECTION_IMAGE_CONFIGS.find((c) => c.key === key);
    if (!config) return;
    setImages((prev) => {
      const updated = { ...prev, [key]: config.defaultUrl };
      try {
        localStorage.setItem(STORAGE_KEY_MAIN, JSON.stringify(updated));
      } catch (err) {
        console.warn(err);
      }
      return updated;
    });
  };

  const resetAllImages = () => {
    const defaultMap: Record<string, string> = {};
    SECTION_IMAGE_CONFIGS.forEach((cfg) => {
      defaultMap[cfg.key] = cfg.defaultUrl;
    });
    setImages(defaultMap);
    try {
      localStorage.removeItem(STORAGE_KEY_MAIN);
    } catch {
      // ignore
    }
  };

  // Inclusão de imagens extras nas seções
  const addImageToSection = (sectionId: string, image: { url: string; caption?: string }) => {
    const newImage: GalleryImage = {
      id: "img_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      url: image.url,
      caption: image.caption || "",
      dateAdded: new Date().toLocaleDateString("pt-BR")
    };

    setSectionGalleries((prev) => {
      const currentList = prev[sectionId] || [];
      const updated = {
        ...prev,
        [sectionId]: [...currentList, newImage]
      };
      try {
        localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(updated));
      } catch (err) {
        console.warn("Storage quota exceeded", err);
      }
      return updated;
    });
  };

  const removeImageFromSection = (sectionId: string, imageId: string) => {
    setSectionGalleries((prev) => {
      const currentList = prev[sectionId] || [];
      const updated = {
        ...prev,
        [sectionId]: currentList.filter((img) => img.id !== imageId)
      };
      try {
        localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(updated));
      } catch (err) {
        console.warn(err);
      }
      return updated;
    });
  };

  const openManager = (targetKey?: string, targetSection?: string) => {
    setSelectedKeyForEdit(targetKey || null);
    setSelectedSectionForAdd(targetSection || null);
    setIsManagerOpen(true);
  };

  const closeManager = () => {
    setIsManagerOpen(false);
    setSelectedKeyForEdit(null);
    setSelectedSectionForAdd(null);
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        sectionGalleries,
        updateImage,
        resetImage,
        resetAllImages,
        addImageToSection,
        removeImageFromSection,
        isManagerOpen,
        openManager,
        closeManager,
        selectedKeyForEdit,
        selectedSectionForAdd
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageManager = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageManager must be used within an ImageProvider");
  }
  return context;
};
