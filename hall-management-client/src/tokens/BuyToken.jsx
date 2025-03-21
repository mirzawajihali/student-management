import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { div } from 'motion/react-client';

const BuyToken = () => {
    const [tokens, setTokens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState({
        hall: '',
        date: '',
        time: ''
    });

    useEffect(() => {
        fetchTokens();
    }, []);

    const fetchTokens = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/tokens');
            setTokens(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch tokens');
            setLoading(false);
            console.error(err);
        }
    };

    const handleBuyToken = async (tokenId) => {
        try {
            await axiosInstance.patch(`/tokens/${tokenId}`, { status: 'sold' });
            fetchTokens(); // Refresh the list after purchase
            alert('Token purchased successfully!');
        } catch (err) {
            setError('Failed to purchase token');
            console.error(err);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({
            ...filter,
            [name]: value
        });
    };

    const filteredTokens = tokens.filter(token => {
        return (
            (filter.hall === '' || token.tokenHall === filter.hall) &&
            (filter.date === '' || token.date === filter.date) &&
            (filter.time === '' || token.time === filter.time) &&
            token.status !== 'sold' // Only show available tokens
        );
    });

    if (loading) return <div className="flex justify-center items-center min-h-[60vh]"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#6A64F1] border-solid"></div></div>;
    if (error) return <div className="text-red-500 text-center py-5">{error}</div>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold text-[#07074D] mb-6 text-center">Available Tokens</h2>
            
            {/* Filter Section */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="text-lg font-medium text-[#07074D] mb-4">Filter Tokens</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-[#07074D] mb-2">Hall</label>
                        <select
                            name="hall"
                            value={filter.hall}
                            onChange={handleFilterChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            <option value="">All Halls</option>
                            <option value="Shahid Lt. Selim Hall">Shahid Lt. Selim Hall</option>
                            <option value="Shahid Shahidul Islam Hall">Shahid Shahidul Islam Hall</option>
                            <option value="Shahid Abdul Hamid Hall">Shahid Abdul Hamid Hall</option>
                            <option value="Tin Shed Hall (Extension)">Tin Shed Hall (Extension)</option>
                            <option value="Shahid President Ziaur Rahman Hall">Shahid President Ziaur Rahman Hall</option>
                            <option value="Bangabandhu Sheikh Mujibur Rahman Hall">Bangabandhu Sheikh Mujibur Rahman Hall</option>
                            <option value="Deshratna Sheikh Hasina Hall">Deshratna Sheikh Hasina Hall</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#07074D] mb-2">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={filter.date}
                            onChange={handleFilterChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#07074D] mb-2">Time</label>
                        <select
                            name="time"
                            value={filter.time}
                            onChange={handleFilterChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            <option value="">All Times</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>
                    </div>
                </div>
            </div>
            
            {/* Token Cards */}
            {filteredTokens.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg shadow">
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No Tokens Available</h3>
                    <p className="text-gray-500">Try changing your filters or check back later.</p>
                </div>
            ) : (
                <div>
                    <h2 className='text-center text-xl font-semibold text-[#07074D] mb-6'>We request you to contact the seller and buy your token by personally contact with the seller and after confirming the token, please push the Purchased button</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {filteredTokens.map((token) => (
                        <div key={token._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#07074D]">{token.tokenHall}</h3>
                                        <p className="text-sm text-gray-600">Seller: {token.name}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Available</span>
                                </div>
                                
                                <div className="space-y-3 mb-5">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">Date:</span>
                                        <span className="text-sm font-medium">{new Date(token.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">Time:</span>
                                        <span className="text-sm font-medium capitalize">{token.time}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">Contact:</span>
                                        <span className="text-sm font-medium">{token.phone}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">Seller's Hall:</span>
                                        <span className="text-sm font-medium">{token.sellerHall}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">Room Number:</span>
                                        <span className="text-sm font-medium">{token.roomNumber}</span>
                                    </div>
                                </div>
                                
                                <button
                                    onClick={() => handleBuyToken(token._id)}
                                    className="w-full rounded-md bg-gray-900 py-2 px-5 text-center text-base font-semibold text-white outline-none hover:bg-gray-800 transition-colors duration-300"
                                >
                                    Purchased
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            )}
        </div>
    );
};

export default BuyToken;