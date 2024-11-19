import { StyleSheet } from "react-native";

type Palette = {
    backgroundScreen: string;
    textColor: string;
    buttonBackground: string;
    secondButtonBackground: string;
    inputBgColor: string;
  };
  
const generateRandomPalette = (colors: string[]): Palette | null => {
    if (colors.length < 5) {
        console.error("Za mao koloruw.");
        return null;
    }
    const getRandomColor = (): string => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors.splice(randomIndex, 1)[0];
    };

    return {
        backgroundScreen: getRandomColor(),
        textColor: getRandomColor(),
        buttonBackground: getRandomColor(),
        secondButtonBackground: getRandomColor(),
        inputBgColor: getRandomColor(),
    };
};
  
  //Tutaj wklepac theme paletke
  const colorPool = [
    "#4C4B16", 
    "#898121", 
    "#E6C767", 
    "#F87A53", 
    "#7a753e", 
  ];

  
  const palette = generateRandomPalette([...colorPool]);
  console.log(palette);
//BASIC

// backgroundScreen:
//     {
//         backgroundColor: palette?.backgroundScreen
//     },
//     textColor:
//     {
//         color:palette?.textColor,
//         fontWeight:'bold',
//     },
//     buttonBackground:
//     {
//         backgroundColor:palette?.buttonBackground
//     },
//     secondButtonBackground:
//     {
//         backgroundColor:palette?.secondButtonBackground
//     },
//     inputBackground:
//     {
//         backgroundColor:palette?.inputBgColor
//     }


//mrozny jakis

// backgroundScreen:
// {
//     backgroundColor: "#EBF4F6"
// },
// textColor:
// {
//     color:"#18c8f8",
//     fontWeight:'bold',
// },
// buttonBackground:
// {
//     backgroundColor:"#37B7C3"
// },
// secondButtonBackground:
// {
//     backgroundColor:"#088395"
// },
// inputBackground:
// {
//     backgroundColor:'white'
// }

export const globalStyle = StyleSheet.create({
    backgroundWhite:
    {
        backgroundColor:'white',
    },
    flex:
    {
        flex:1,
    },
    flexGrow:
    {
        flexGrow:1,
    },
    backgroundScreen:
    {
        backgroundColor: palette?.backgroundScreen
    },
    textColor:
    {
        color:palette?.textColor,
        fontWeight:'bold',
        fontSize:32,
    },
    buttonBackground:
    {
        backgroundColor:palette?.buttonBackground
    },
    secondButtonBackground:
    {
        backgroundColor:palette?.secondButtonBackground
    },
    inputBackground:
    {
        backgroundColor:palette?.inputBgColor
    }
});
