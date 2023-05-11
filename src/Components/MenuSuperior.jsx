import React from "react";
import { useTranslation } from "react-i18next";



const MenuSuperior = () => {
    const {t, i18n} = useTranslation('common');
    return(
    <header>
        <nav>
            <ul>
                <li><a href="/">{t('Header.op4')}</a></li>
                <li><a href="/modoEstudio">{t('Header.op2')}</a></li>
            </ul>
        </nav>
    </header>
    );
}
export default MenuSuperior;