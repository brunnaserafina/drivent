import api from './api';

export async function getActivities(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getNumberOfEnrollmentsByActivity(token, activityId) {
  const response = await api.get(`/activities/activity-tickets/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return response.data;
}

export async function create(body, token) {
  const response = await api.post('/activities', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
