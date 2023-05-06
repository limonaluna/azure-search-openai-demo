import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are vegetarian lunch options?",
        value: "What are vegetarian lunch options?"
    },
    { text: "How did the most important KPIs score for 2022?", value: "How did the most important KPIs score for 2022?" },
    { text: "What is the outlook for the next fiscal year?", value: "What is the outlook for the next fiscal year?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
