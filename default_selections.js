// Selección confirmada previamente por la quinceañera y su mamá.
const defaultSelections = {
    "2": { "categories": ["impresion"], "notes": "" },
    "6": { "categories": ["impresion"], "notes": "" },
    "8": { "categories": ["impresion"], "notes": "" },
    "9": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412163458_0062_D": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412163512_0063_D": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412163517_0065_D": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412163534_0067_D": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412164208_0182_D": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412164210_0183_D": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412164226_0187_D": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412164302_0196_D": { "categories": ["impresion"], "notes": "" },
    "DJI_20260412164305_0198_D": { "categories": ["impresion"], "notes": "" },
    "DSC_5540": { "categories": ["impresion"], "notes": "" },
    "DSC_5541": { "categories": ["impresion"], "notes": "" },
    "DSC_5550": { "categories": ["impresion"], "notes": "" },
    "DSC_5557": { "categories": ["impresion"], "notes": "" },
    "DSC_5562": { "categories": ["impresion"], "notes": "" },
    "DSC_5564": { "categories": ["impresion"], "notes": "" },
    "DSC_5567": { "categories": ["impresion"], "notes": "" },
    "DSC_5580": { "categories": ["impresion"], "notes": "" },
    "DSC_5585": { "categories": ["impresion"], "notes": "" },
    "DSC_5588": { "categories": ["impresion"], "notes": "" },
    "DSC_5589": { "categories": ["impresion"], "notes": "" },
    "DSC_7708": { "categories": ["impresion"], "notes": "" },
    "DSC_7713": { "categories": ["impresion"], "notes": "" },
    "DSC_7716": { "categories": ["impresion"], "notes": "" },
    "DSC_7720": { "categories": ["impresion"], "notes": "" },
    "DSC_7724": { "categories": ["impresion"], "notes": "" },
    "DSC_7732": { "categories": ["impresion"], "notes": "" },
    "DSC_7737": { "categories": ["impresion"], "notes": "" },
    "DSC_7741": { "categories": ["impresion"], "notes": "" },
    "DSC_7823": { "categories": ["impresion"], "notes": "" },
    "DSC_7824": { "categories": ["impresion"], "notes": "" },
    "DSC_7835": { "categories": ["impresion"], "notes": "" },
    "DSC_7836": { "categories": ["impresion"], "notes": "" },
    "DSC_8011": { "categories": ["impresion"], "notes": "" },
    "DSC_8327": { "categories": ["impresion"], "notes": "" },
    "DSC_8392": { "categories": ["impresion"], "notes": "" },

    "DSC_7864": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_7865": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_7879": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_7883": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_7889": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_7890": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_7933": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_7934": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_7998": { "categories": ["redes_sociales"], "notes": "" },
    "DSC_8391": { "categories": ["redes_sociales"], "notes": "" },

    "1": { "categories": ["descartada"], "notes": "" },
    "4": { "categories": ["descartada"], "notes": "" },
    "5": { "categories": ["descartada"], "notes": "" },
    "11": { "categories": ["descartada"], "notes": "" }
};

// Selección adicional importada de C:\Users\foro7\Downloads\interface.txt.
const interfaceImpresion = `2 6 8 9 DJI_20260412163517_0065_D DJI_20260412164212_0184_D DJI_20260412164230_0188_D DJI_20260412164302_0196_D DJI_20260412164305_0198_D DJI_20260412165243_0207_D DJI_20260412165814_0226_D DSC_5540 DSC_5541 DSC_5557 DSC_5560 DSC_5564 DSC_5580 DSC_5585 DSC_5588 DSC_7708 DSC_7713 DSC_7716 DSC_7720 DSC_7724 DSC_7725 DSC_7732 DSC_7737 DSC_7741 DSC_7745 DSC_7746 DSC_7754 DSC_7758 DSC_7764 DSC_7779 DSC_7783 DSC_7785 DSC_7789 DSC_7802 DSC_7804 DSC_7805 DSC_7809 DSC_7816 DSC_7817 DSC_7818 DSC_7839 DSC_7846 DSC_7850 DSC_7854 DSC_7856 DSC_7857 DSC_7859 DSC_7861 DSC_7862 DSC_7865 DSC_7867 DSC_7868 DSC_7875 DSC_7876 DSC_7877 DSC_7878 DSC_7880 DSC_7881 DSC_7884 DSC_7885 DSC_7887 DSC_7888 DSC_7889 DSC_7892 DSC_7896 DSC_7901 DSC_7902 DSC_7909 DSC_7911 DSC_7912 DSC_7916 DSC_7917 DSC_7918 DSC_7942 DSC_7944 DSC_7946 DSC_7950 DSC_7953 DSC_7957 DSC_7958 DSC_7961 DSC_7963 DSC_7972 DSC_7975 DSC_7979 DSC_7987 DSC_7993 DSC_7996 DSC_8001 DSC_8003 DSC_8005 DSC_8008 DSC_8010 DSC_8011 DSC_8017 DSC_8018 DSC_8021 DSC_8059 DSC_8065 DSC_8066 DSC_8068 DSC_8088 DSC_8090 DSC_8103 DSC_8106 DSC_8130 DSC_8143 DSC_8145 DSC_8146 DSC_8152 DSC_8158 DSC_8160 DSC_8164 DSC_8173 DSC_8186 DSC_8219 DSC_8222 DSC_8223 DSC_8229 DSC_8234 DSC_8237 DSC_8241 DSC_8243 DSC_8244 DSC_8248 DSC_8249 DSC_8251 DSC_8252 DSC_8255 DSC_8257 DSC_8258 DSC_8276 DSC_8281 DSC_8282 DSC_8286 DSC_8292 DSC_8293 DSC_8300 DSC_8305 DSC_8310 DSC_8331 DSC_8337 DSC_8346 DSC_8350 DSC_8351 DSC_8352 DSC_8353 DSC_8354 DSC_8355 DSC_8356 DSC_8357 DSC_8359 DSC_8360 DSC_8362 DSC_8364 DSC_8366 DSC_8367 DSC_8368 DSC_8369 DSC_8371 DSC_8372 DSC_8374 DSC_8376 DSC_8377 DSC_8380 DSC_8388 DSC_8392 DSC_8393 DSC_8394 DSC_8396 DSC_8398 DSC_8415 DSC_8416`.split(/\s+/);
const interfaceRedes = `DSC_7827 DSC_7893 DSC_8362`.split(/\s+/);

function agregarCategoria(fotos, categoria) {
    fotos.forEach((nombre) => {
        if (!defaultSelections[nombre]) defaultSelections[nombre] = { categories: [], notes: "" };
        if (!defaultSelections[nombre].categories.includes(categoria)) {
            defaultSelections[nombre].categories.push(categoria);
        }
    });
}

agregarCategoria(interfaceImpresion, "impresion");
agregarCategoria(interfaceRedes, "redes_sociales");
