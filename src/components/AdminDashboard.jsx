
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/bookings"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();

        if (data.success) {
          setBookings(data.bookings);
        } else {
          throw new Error("Could not load bookings");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const totalCustomers = new Set(
    bookings.map((booking) => booking.email)
  ).size;

  const totalGuests = bookings.reduce(
    (total, booking) => total + Number(booking.guests || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-blue-400 mb-10">
          TravelGo
        </h1>

        <nav className="space-y-3">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full text-left px-4 py-3 rounded-lg ${
              activeTab === "overview"
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab("bookings")}
            className={`w-full text-left px-4 py-3 rounded-lg ${
              activeTab === "bookings"
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
            All Bookings
          </button>
        </nav>

        <Link
          to="/"
          className="block mt-10 text-gray-300 hover:text-white"
        >
          Back to Website
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 p-5 md:p-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {activeTab === "overview"
                ? "Admin Dashboard"
                : "All Bookings"}
            </h2>
            <p className="text-gray-500 mt-1">
              Welcome to TravelGo Admin Panel
            </p>
          </div>

          <button
            onClick={() => {
              window.location.href = "/admin-login";
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading bookings...</p>
        ) : error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            {error}
          </div>
        ) : (
          <>
            {activeTab === "overview" && (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Total Bookings</p>
                    <h3 className="text-3xl font-bold mt-2 text-blue-600">
                      {bookings.length}
                    </h3>
                  </div>

                  <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Total Customers</p>
                    <h3 className="text-3xl font-bold mt-2 text-green-600">
                      {totalCustomers}
                    </h3>
                  </div>

                  <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Total Guests</p>
                    <h3 className="text-3xl font-bold mt-2 text-purple-600">
                      {totalGuests}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6 mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">
                      Recent Bookings
                    </h3>
                    <button
                      onClick={() => setActiveTab("bookings")}
                      className="text-blue-600 hover:underline"
                    >
                      View All
                    </button>
                  </div>

                  <BookingTable bookings={bookings.slice(0, 5)} />
                </div>
              </>
            )}

            {activeTab === "bookings" && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
                  <h3 className="text-xl font-bold">
                    All Booking Records
                  </h3>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    Refresh
                  </button>
                </div>

                <BookingTable bookings={bookings} />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

function BookingTable({ bookings }) {
  if (bookings.length === 0) {
    return (
      <p className="text-gray-500 py-6 text-center">
        No bookings found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3">ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Destination</th>
            <th className="p-3">Travel Date</th>
            <th className="p-3">Guests</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{booking.id}</td>
              <td className="p-3 font-medium">{booking.full_name}</td>
              <td className="p-3">{booking.email}</td>
              <td className="p-3">{booking.phone}</td>
              <td className="p-3">{booking.destination}</td>
              <td className="p-3">{booking.travel_date}</td>
              <td className="p-3">{booking.guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;