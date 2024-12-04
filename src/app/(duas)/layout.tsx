import * as React from 'react';

interface DuaLayoutProps {
    children: React.ReactNode | React.ReactElement;
}

const DuaLayout = ({ children }: DuaLayoutProps) => {
    
    return (
        <div>
            {children}
        </div>
    );
};

export default DuaLayout;