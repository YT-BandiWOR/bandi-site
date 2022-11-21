import React from 'react';
import PageWrapper from "../components/PageWrapper";
import Head1 from "../components/Head1";
import UnderHead from "../components/UnderHead";

const H404 = () => {
    return (
        <PageWrapper>
            <Head1>Страница не найдена - <span style={{color: "red"}}>404</span></Head1>
            <UnderHead>Возможно данная страница была удалена, либо Вы ошиблись с URL-адресом.</UnderHead>

        </PageWrapper>
    );
};

export default H404;