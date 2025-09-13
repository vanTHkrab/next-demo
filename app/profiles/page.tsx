const ProfilePage = () => {
    return (
        <div className="p-6 bg-gradient-to-r from-blue-100 text-center text-lg font-semibold min-h-screen">
            <h1 className="text-3xl mb-6 text-blue-800 font-extrabold">Welcome to Your Profile</h1>
            <p className="text-gray-800 mb-4">This is your personal space where you can view and manage your account
                details.</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center">
                <div className="mt-6 p-6 bg-white rounded-lg shadow-lg inline-block text-left">
                    <p className="mb-2"><span className="font-bold text-gray-700">Name:</span> Audsadawut (อัษฎาวุฒิ)
                    </p>
                    <p className="mb-2"><span className="font-bold text-gray-700">Surname:</span> Nakthungtao
                        (นาคทุ่งเตา)</p>
                    <p><span className="font-bold text-gray-700">Student ID:</span> 66133505</p>
                </div>

                <div className="mt-6 p-6 bg-white rounded-lg shadow-lg inline-block text-left">
                    <p className="mb-2"><span className="font-bold text-gray-700">Name:</span> ทชานน
                    </p>
                    <p className="mb-2"><span className="font-bold text-gray-700">Surname:</span> ศรีสุข</p>
                    <p><span className="font-bold text-gray-700">Student ID:</span> 66131103</p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;