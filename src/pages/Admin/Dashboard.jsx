import { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    totalSales: 0,
    activeUsers: 0,
    pendingOrders: 0
  });

  useEffect(() => {
    // Fetch admin metrics from API
  }, []);

  return (
    <AdminLayout>
      <div className="dashboard-metrics">
        <div className="metric-card">
          <h3>Total Sales</h3>
          <p>${metrics.totalSales}</p>
        </div>
        {/* Add more metric cards */}
      </div>
    </AdminLayout>
  );
}
