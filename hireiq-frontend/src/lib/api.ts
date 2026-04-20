// import axios from 'axios'

// const api = axios.create({
//   baseURL: '/api',
//   headers: { 'Content-Type': 'application/json' },
// })

// export const sessionApi = {
//   start: (data: { candidate: { name: string; city?: string; experience_years?: number } }) =>
//     api.post('/session/start', data),
//   get: (id: string) => api.get(`/session/${id}`),
// }

// export const conversationApi = {
//   turn: (data: { session_id: string; candidate_text: string }) =>
//     api.post('/conversation/turn', data),
// }

// export const evaluationApi = {
//   generate: (session_id: string) => api.post('/evaluation/generate', { session_id }),
//   get: (session_id: string) => api.get(`/evaluation/${session_id}`),
// }

// export const recruiterApi = {
//   candidates: () => api.get('/recruiter/candidates'),
//   copilot: (data: { session_id: string; question: string }) =>
//     api.post('/recruiter/copilot', data),
//   report: (session_id: string) => api.get(`/recruiter/report/${session_id}`),
// }

// export default api



import axios from 'axios'

const api = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } })

export const sessionApi = {
  start: (data: { candidate: { name: string; city?: string; experience_years?: number } }) =>
    api.post('/session/start', data),
  get: (id: string) => api.get(`/session/${id}`),
}

export const conversationApi = {
  turn: (data: { session_id: string; candidate_text: string }) =>
    api.post('/conversation/turn', data),
}

export const evaluationApi = {
  generate: (session_id: string) => api.post('/evaluation/generate', { session_id }),
  get: (session_id: string) => api.get(`/evaluation/${session_id}`),
}

export const recruiterApi = {
  candidates: () => api.get('/recruiter/candidates'),
  copilot: (data: { session_id: string; question: string }) =>
    api.post('/recruiter/copilot', data),
  report: (session_id: string) => api.get(`/recruiter/report/${session_id}`),
}

export default api