import React from 'react'
import AppHeader from './_components/AppHeader';

const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <AppHeader />
            <div className="p-10 md:px-20 lg:px-40 xl:px-40">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout