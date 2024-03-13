import markdownit from "markdown-it";
import {FC} from "react";
import parse from "html-react-parser";

interface DescriptionModuleProps {
    text: string;
}

const DescriptionModule: FC<DescriptionModuleProps> = ({text}) => {
    const md = markdownit();
    const htmlContent = md.render(text);

    return parse(htmlContent);
}

export default DescriptionModule;