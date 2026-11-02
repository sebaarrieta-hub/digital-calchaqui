import React, { useState } from 'react';

export default function RepairsManager() {
  const [repairs, setRepairs] = useState([
    { id: 1, client: 'Juan Pérez', device: 'Notebook Lenovo IdeaPad', issue: 'No enciende / Cambio de conector', status: 'En revisión' },
    { id: 2, client: 'María Gómez', device: 'PC Escritorio (GIGABYTE A520M)', issue: 'Mantenimiento y formato', status: 'Listo para retirar' }
  ]);
  
  const [newClient, setNewClient] = useState('');
  const [newDevice, setNewDevice] = useState('');
  const [newIssue, setNewIssue] = useState('');

  const handleAddRepair = (e) => {
    e.preventDefault();
    if (!newClient || !newDevice) return;

    const item = {
      id: Date.now(),
      client: newClient,
      device: newDevice,
      issue: newIssue || 'Revisión general',
      status: 'Ingresado'
    };

    setRepairs([item, ...repairs]);
    setNewClient('');
    setNewDevice('');
    setNewIssue('');
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', background: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ color: '#111', borderBottom: '2px solid #ddd', paddingBottom: '8px' }}>
        Digital Calchaquí - Órdenes de Reparación
      </h2>

      {/* Formulario de carga */}
      <form onSubmit={handleAddRepair} style={{ display: 'grid', gap: '12px', background: '#fff', padding: '16px', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
        <h3>Nuevo Ingreso de Equipo</h3>
        <input 
          type="text" 
          placeholder="Nombre del cliente" 
          value={newClient} 
          onChange={(e) => setNewClient(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="text" 
          placeholder="Equipo / Modelo (ej. Impresora HP P1102w)" 
          value={newDevice} 
          onChange={(e) => setNewDevice(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="text" 
          placeholder="Falla reportada / Trabajo a realizar" 
          value={newIssue} 
          onChange={(e) => setNewIssue(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Registrar Ingreso
        </button>
      </form>

      {/* Listado de equipos */}
      <div style={{ background: '#fff', padding: '16px', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h3>Equipos en Taller ({repairs.length})</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {repairs.map((item) => (
            <li key={item.id} style={{ borderBottom: '1px solid #eee', padding: '12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{item.client}</strong> - <span style={{ color: '#555' }}>{item.device}</span>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Problema: {item.issue}</div>
              </div>
              <span style={{ 
                padding: '4px 8px', 
                borderRadius: '12px', 
                fontSize: '12px', 
                fontWeight: 'bold',
                background: item.status === 'Listo para retirar' ? '#e1f5fe' : '#fff9c4',
                color: item.status === 'Listo para retirar' ? '#0288d1' : '#f57f17'
              }}>
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
