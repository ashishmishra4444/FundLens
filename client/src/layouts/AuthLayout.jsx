import React from 'react'

const AuthLayout = ({ left, right }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gray-50">
        {left}
      </div>
      <div className="bg-white">
        {right}
      </div>
    </div>
  );
}

export default AuthLayout
