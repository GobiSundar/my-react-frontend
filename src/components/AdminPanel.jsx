import React, { useEffect, useState } from 'react';
import API from '../api';

const AdminPanel = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageUrl: '',
    serviceType: 'eseva',
  });

  const [data, setData] = useState([]);

  const fetchData = () => {
    API.get().then(res => setData(res.data));
  };

const handleSubmit = async () => {
  let uploadedImageUrl = form.imageUrl; // fallback if no file upload

  // If a file is selected, upload it first
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await API.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      uploadedImageUrl = res.data; // backend returns image URL
    } catch (error) {
      console.error('Image upload failed:', error);
      return; // stop submit if upload fails
    }
  }

  // Now send the form data including imageUrl
  API.post('', { ...form, imageUrl: uploadedImageUrl }).then(() => {
    fetchData();
    setForm({ title: '', description: '', imageUrl: '', serviceType: 'eseva' });
    setFile(null); // reset file state
  });
};


  useEffect(() => {
    fetchData();
  }, []);
  const [file, setFile] = useState(null);


  return (
    <div className="p-4">
      <h2>Admin Panel</h2>
      <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      {/* <input placeholder="Image URL" value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })} /> */}
      {/* New button to open website */}
   
      <input type="file" onChange={e => setFile(e.target.files[0])} />
{file && (
  <img src={URL.createObjectURL(file)} alt="preview" style={{ width: '150px', marginTop: '10px' }} />
)}

      <select value={form.serviceType} onChange={e => setForm({ ...form, serviceType: e.target.value })}>
        <option value="eseva">E-Sevai</option>
        <option value="computer">Computer</option>
        <option value="food">Food</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>

 <button onClick={() => window.open('/', '_blank')}>
  Go to Website
</button>

<button
  className="bg-red-500 text-white px-4 py-2 rounded mb-4"
  onClick={() => {
    localStorage.removeItem('admin_logged_in');
    window.location.href = '/';
  }}
>
  Logout
</button>


      <h3>All Entries</h3>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title} ({item.serviceType})</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
