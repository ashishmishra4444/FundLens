const Dashboard = () => {
  return (
    <div className="space-y-10">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Invested", value: "₹2,40,000" },
          { label: "Current Value", value: "₹3,10,000" },
          { label: "Wealth Gained", value: "₹70,000" },
          { label: "Active SIPs", value: "3" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl bg-white/5 border border-white/10 p-5 backdrop-blur-md"
          >
            <p className="text-sm text-gray-400">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-teal-400">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent SIPs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent SIPs</h3>
        <div className="space-y-3">
          {["Index Fund", "ELSS Fund", "Flexi Cap Fund"].map((sip) => (
            <div
              key={sip}
              className="flex justify-between bg-white/5 border border-white/10 p-4 rounded-lg"
            >
              <span>{sip}</span>
              <span className="text-teal-400">Active</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="bg-teal-500 text-black px-6 py-3 rounded-full font-semibold">
          Create SIP
        </button>
        <button className="border border-teal-400 px-6 py-3 rounded-full text-teal-400">
          Add Goal
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
