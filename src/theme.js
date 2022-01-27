import {createMuiTheme} from "@material-ui/core/styles";

const useThemes = createMuiTheme({
    palette: {
        primary: {
            light: '#95d38b',
            main: '#7bc96f',
            dark: '#568c4d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#cccccc',
            main: '#ffffff',
            dark: '#838383',
            contrastText: '#383838',
        },
    },
});

export default useThemes;
