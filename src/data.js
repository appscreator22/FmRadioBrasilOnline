import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Radio Saudade Fm",
            artist: "RadioSaudadeFm",
            cover: "https://img.freepik.com/psd-gratis/maqueta-microfono-escritorio-rectangular-vista-frontal_1332-10597.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://24923.live.streamtheworld.com/SAUDADE_FM_SC",
            active: true,
        },
        {
            name:"Alpha Fm",
            artist: "AlphaFm",
            cover: "https://img.freepik.com/vector-gratis/concepto-marco-neon-aire_52683-52393.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://24083.live.streamtheworld.com/RADIO_ALPHAFM_SC",
            active: false,
        },
        {
            name:"UCP Petropilis",
            artist: "UCPPetropilis",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://www.ucpfm.com.br/player/getSom.php",
            active: false,
        },
        {
            name:"Rádio BH FM",
            artist: "RádioBHFM",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),Rádio BH FM
            color: ["#008781", "#cfc08c"],
            audio: "https://26373.live.streamtheworld.com/BHFM_SC",
            active: false,
        },
        {
            name:"Transamerica pop",
            artist: "Transamericapop",
            cover: "https://img.freepik.com/foto-gratis/fondo-musica-o-podcast-auriculares-taza-cafe-mesa-azul-plana-vista-superior-plana_501050-983.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://24383.live.streamtheworld.com/RT_SP_SC",
            active: false,
        },
        {
            name:"Nova Brasil",
            artist: "NovaBrasil",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://26513.live.streamtheworld.com/NOVABRASIL_SP_SC",
            active: false,
        },
        {
            name:"Radio Fm O Dia",
            artist: "RadioFmODia",
            cover: "https://img.freepik.com/vector-gratis/radio-plana-retro-ilustrada_23-2148812864.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://streaming.livespanel.com:20000/live",
            active: false,
        },
        {
            name:"Soul Radio Classic",
            artist: "SoulRadioClassic",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://listen.soulradioclassics.com/play",
            active: false,
        },
        {   
            name:"Radio Colina",
            artist: "RadioColina",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://paineldj5.com.br:1112/stream/1/",
            active: false,
        },
    ];
}

export default chillHop;


