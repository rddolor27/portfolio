import React, { createContext, useState } from 'react';

export const AppContext = createContext([]);

export const AppStateProvider = ({ children }) => {
    const [inAboutSection, setInAboutSection] = useState(true);
    const [inExperienceSection, setInExperienceSection] = useState(true);
    const [inSkillsSection, setInSkillsSection] = useState(true);
    const [inProjectsSection, setInProjectsSection] = useState(true);
    const [inContactsSection, setInContactsSection] = useState(true);


    return (
        <AppContext.Provider value={
            {
                inAboutSection, setInAboutSection,
                inExperienceSection, setInExperienceSection,
                inSkillsSection, setInSkillsSection,
                inProjectsSection, setInProjectsSection,
                inContactsSection, setInContactsSection

            }
        }>
            {children}
        </AppContext.Provider>
    );
};