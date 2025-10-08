import { useState } from 'react';
import Dropdown from './Dropdown';

// Example Implementation in a Table
const TableExample = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User' },
  ]);

  const handleView = (user) => {
    alert(`Viewing details for ${user.name}`);
  };

  const handleEdit = (user) => {
    alert(`Editing ${user.name}`);
  };

  const handleDelete = (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== userId));
    }
  };

  const getDropdownLinks = (user) => [
    {
      label: 'View Details',
      onClick: () => handleView(user),
      icon: '👁️'
    },
    {
      label: 'Edit',
      onClick: () => handleEdit(user),
      icon: '✏️'
    },
    {
      label: 'Delete',
      onClick: () => handleDelete(user.id),
      danger: true,
      icon: '🗑️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">User Management</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Dropdown links={getDropdownLinks(user)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Dropdown Customization Examples</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Default (right aligned):</span>
              <Dropdown
                links={[
                  { label: 'Action 1', onClick: () => alert('Action 1') },
                  { label: 'Action 2', onClick: () => alert('Action 2') }
                ]}
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Left aligned:</span>
              <Dropdown
                align="left"
                links={[
                  { label: 'Action 1', onClick: () => alert('Action 1') },
                  { label: 'Action 2', onClick: () => alert('Action 2') }
                ]}
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">With disabled option:</span>
              <Dropdown
                links={[
                  { label: 'Enabled Action', onClick: () => alert('Enabled') },
                  { label: 'Disabled Action', onClick: () => {}, disabled: true }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableExample;