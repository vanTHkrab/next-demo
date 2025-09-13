const ProfilePage = () => {
    return (
        <div className="p-4 bg-gray-100 text-center text-lg font-semibold">
            <h1 className="text-2xl mb-4">Welcome to Your Profile</h1>
            <p className="text-gray-700">This is your personal space where you can view and manage your account details.</p>
            {/*name surname std*/}
            <div className="mt-6 p-4 bg-white rounded shadow-md inline-block text-left">
                <p><span className="font-bold">Name:</span> Audsadawut (อัษฎาวุฒิ)</p>
                <p><span className="font-bold">Surname:</span> Nakthungtao (นาคทุ่งเตา)</p>
                <p><span className="font-bold">Student ID:</span> 66133505</p>
            </div>
        </div>
    );
}

export default ProfilePage;