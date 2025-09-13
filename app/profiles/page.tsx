const ProfilePage = () => {
    return (
        <div className="p-4 bg-gray-100 text-center text-lg font-semibold">
            <h1 className="text-2xl mb-4">Welcome to Your Profile</h1>
            <p className="text-gray-700">This is your personal space where you can view and manage your account details.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit Profile</button>
        </div>
    );
}

export default ProfilePage;