import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { useEffect, useState } from 'react';
import { echo } from '@/echo';

export default function Dashboard() {
    const [notifications, setNotifications] = useState<string[]>([]);

    useEffect(() => {
        echo.private('test-channel.1')
            .listen('MessageSent', (e: any) => {
                setNotifications((prev) => [...prev, e.message]);
            });

        return () => {
            echo.leave('test-channel.1');
        };
    }, []);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {notifications.map((n, i) => <li key={i}>{n}</li>)}
            </div>
        </AuthenticatedLayout>
    );
}
