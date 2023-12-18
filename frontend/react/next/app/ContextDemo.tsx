import { ReactNode } from 'react';
interface SectionProps {
    children: ReactNode
}
interface HeadingProps {
    level: number
    children: ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section className="section">
            {children}
        </section>
    )
}
const Heading: React.FC<HeadingProps> = ({ level, children }) => {
    switch (level) {
        case 1:
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        case 3:
            return <h3>{children}</h3>
        case 4:
            return <h4>{children}</h4>
        case 5:
            return <h5>{children}</h5>
        case 6:
            return <h6>{children}</h6>
        default:
            throw Error('Unknown level ' + level)
    }
}

export default function ContextDemo() {
    return (
        <Section>
            <Heading level={1}>ContextDemo</Heading>
            <Section>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Section>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Section>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>

            <Heading level={5}>Sub-sub-sub-heading</Heading>
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
        </Section>
    )
}
