const request = async (url, options = {}) => {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}

export const getBackendHealth = () => request('/api/')

export const getGalleryImages = async () => {
  const result = await request('/api/images')
  return result.success ? result.data : []
}

export const uploadImage = async (file) => {
  const formData = new FormData()
  formData.append('image', file)

  return request('/api/upload', {
    method: 'POST',
    body: formData,
  })
}
