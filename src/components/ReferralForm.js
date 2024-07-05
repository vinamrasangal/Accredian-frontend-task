import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ReferralForm = ({ onClose }) => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!referrerName) newErrors.referrerName = 'Referrer name is required';
    if (!referrerEmail) newErrors.referrerEmail = 'Referrer email is required';
    if (!refereeName) newErrors.refereeName = 'Referee name is required';
    if (!refereeEmail) newErrors.refereeEmail = 'Referee email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post('/api/referrals', {
          referrerName,
          referrerEmail,
          refereeName,
          refereeEmail,
        });

        console.log('Referral submitted:', response.data);
        onClose(); // Close the form after successful submission
      } catch (error) {
        console.error('Error submitting referral:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl mb-4">Referral Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Referrer Name</label>
            <input
              type="text"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              className="w-300 border rounded-lg p-2"
            />
            {errors.referrerName && (
              <p className="text-red-500 text-sm">{errors.referrerName}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Referrer Email</label>
            <input
              type="email"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              className="w-300 border rounded-lg p-2"
            />
            {errors.referrerEmail && (
              <p className="text-red-500 text-sm">{errors.referrerEmail}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Referee Name</label>
            <input
              type="text"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              className="w-300 border rounded-lg p-2"
            />
            {errors.refereeName && (
              <p className="text-red-500 text-sm">{errors.refereeName}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Referee Email</label>
            <input
              type="email"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              className="w-300 border rounded-lg p-2"
            />
            {errors.refereeEmail && (
              <p className="text-red-500 text-sm">{errors.refereeEmail}</p>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white rounded-lg py-2 px-4 hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ReferralForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ReferralForm;
