import React, { useState } from 'react';
import CodeViewer from './CodeViewer';
import SubtitleGenerator from './SubtitleGenerator';
import { Terminal, Code2, Settings } from 'lucide-react';

function DevTools() {
  const [activeTab, setActiveTab] = useState('console');
  const [subtitles, setSubtitles] = useState([]);

  const handleTranscript = (text) => {
    setSubtitles((prev) => [...prev, text]);
  };

  const sampleCode = `
// Example code for speech recognition
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
  const transcript = Array.from(event.results)
    .map(result => result[0].transcript)
    .join(' ');
  console.log(transcript);
};
  `;

  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab('console')}
          className={`px-4 py-2 flex items-center ${
            activeTab === 'console' ? 'bg-gray-800' : ''
          }`}
        >
          <Terminal className="h-4 w-4 mr-2" />
          Console
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-2 flex items-center ${
            activeTab === 'code' ? 'bg-gray-800' : ''
          }`}
        >
          <Code2 className="h-4 w-4 mr-2" />
          Code
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 flex items-center ${
            activeTab === 'settings' ? 'bg-gray-800' : ''
          }`}
        >
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'console' && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Speech Recognition Console</h3>
            <div className="bg-gray-800 p-4 rounded-lg h-64 overflow-y-auto">
              {subtitles.map((subtitle, index) => (
                <div key={index} className="text-sm text-gray-300 mb-2">
                  {subtitle}
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'code' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sample Implementation</h3>
            <CodeViewer code={sampleCode} language="javascript" />
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recognition Settings</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Enable continuous recognition</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Show interim results</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Auto-punctuation</span>
              </label>
            </div>
          </div>
        )}
      </div>
      <SubtitleGenerator onTranscript={handleTranscript} />
    </div>
  );
}

export default DevTools;