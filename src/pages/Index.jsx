import React from 'react';
import PageWrapper from "../components/PageWrapper";
import Head1 from "../components/Head1";
import UnderHead from "../components/UnderHead";
import Content from "../components/Content";
import SubHead from "../components/SubHead";

const Index = () => {
    return (
        <PageWrapper>

            <Head1>Наш сайт - BandIT.com</Head1>
            <UnderHead>Данные актуальны на 21.12.2022</UnderHead>

            <Content>
                <p>Наш сайт невероятно востребован на територии Российской Федерации.</p>
                <p>Наш сайт невероятно.</p>
                <p>Наш сайт невероятно востребован на територии Российской.</p>
                <p>Наш сайт невероятно востребован на територии Российской Федерации.</p>
            </Content>

            <SubHead>Немного о нас</SubHead>

            <Content>
            <p>Мы - компания, разрабатвающая информационные технологии, за нами будущее.</p>
            </Content>

            {/*  */}
            <Head1>Наш сайт - BandIT.com</Head1>
            <UnderHead>Данные актуальны на 21.12.2022</UnderHead>

            <Content>
                <p>Наш сайт невероятно востребован на територии Российской Федерации.</p>
                <p>Наш сайт невероятно.</p>
                <p>Наш сайт невероятно востребован на територии Российской.</p>
                <p>Наш сайт невероятно востребован на територии Российской Федерации.</p>
            </Content>

            <SubHead>Немного о нас</SubHead>

            <Content>
                <p>Мы - компания, разрабатвающая информационные технологии, за нами будущее.</p>
            </Content>

        </PageWrapper>
    );
};

export default Index;