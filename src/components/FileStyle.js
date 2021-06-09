import { createGlobalStyle } from "styled-components";

const FileStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");

* {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
}  
.container {
    width: 75%;
    margin: 0 auto;
}

body {
    background: #eff1f7;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

@media (max-width: 900px) {
    container {
        width: 80%;
    }
}
`;

export default FileStyle;
