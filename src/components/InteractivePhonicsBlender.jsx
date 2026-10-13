import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Sparkles, RefreshCw, Star, Zap } from 'lucide-react';
import './InteractivePhonicsBlender.css';

const PHONIC_SOUNDS = [
  { sound: 'c', type: 'consonant', label: '/k/' },
  { sound: 'a', type: 'vowel', label: '/æ/' },
  { sound: 't', type: 'consonant', label: '/t/' },
  { sound: 'sh', type: 'digraph', label: '/ʃ/' },
  { sound: 'i', type: 'vowel', label: '/ɪ/' },
  { sound: 'p', type: 'consonant', label: '/p/' },
  { sound: 'f', type: 'consonant', label: '/f/' },
  { sound: 'r', type: 'consonant', label: '/r/' },
  { sound: 'o', type: 'vowel', label: '/ɒ/' },
  { sound: 'g', type: 'consonant', label: '/ɡ/' },
  { sound: 'b', type: 'consonant', label: '/b/' },
  { sound: 'e', type: 'vowel', label: '/e/' },
  { sound: 'ee', type: 'vowel-team', label: '/iː/' },
  { sound: 'ch', type: 'digraph', label: '/tʃ/' },
  { sound: 'th', type: 'digraph', label: '/θ/' },
];

const PRESET_WORDS = [
  { word: 'cat', tiles: ['c', 'a', 't'], emoji: '🐱', meaning: 'Furry cute animal' },
  { word: 'ship', tiles: ['sh', 'i', 'p'], emoji: '🚢', meaning: 'Sails on ocean' },
  { word: 'frog', tiles: ['f', 'r', 'o', 'g'], emoji: '🐸', meaning: 'Green hopping friend' },
  { word: 'bee', tiles: ['b', 'ee'], emoji: '🐝', meaning: 'Makes sweet honey' },
  { word: 'chip', tiles: ['ch', 'i', 'p'], emoji: '🍟', meaning: 'Crunchy snack' },
];

export default function InteractivePhonicsBlender() {
  const [selectedTiles, setSelectedTiles] = useState(['c', 'a', 't']);
  const [activeWordData, setActiveWordData] = useState(PRESET_WORDS[0]);
  const [isBlending, setIsBlending] = useState(false);

  // Play Speech Synthesis
  const playSound = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85; // Slightly slower for clear kid phonics pronunciation
      utterance.pitch = 1.1; // Friendly warm pitch
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAddTile = (tile) => {
    playSound(tile.sound);
    if (selectedTiles.length < 5) {
      const newTiles = [...selectedTiles, tile.sound];
      setSelectedTiles(newTiles);
      checkWordMatch(newTiles.join(''));
    }
  };

  const handleClear = () => {
    setSelectedTiles([]);
    setActiveWordData(null);
  };

  const checkWordMatch = (currentWord) => {
    const matched = PRESET_WORDS.find(
      (w) => w.word.toLowerCase() === currentWord.toLowerCase()
    );
    if (matched) {
      setActiveWordData(matched);
      triggerCelebration();
    } else {
      setActiveWordData(null);
    }
  };

  const handlePresetSelect = (preset) => {
    setSelectedTiles(preset.tiles);
    setActiveWordData(preset);
    playSound(preset.word);
    triggerCelebration();
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF9F1C', '#3A86FF', '#2EC4B6', '#FF5964'],
    });
  };

  const handleBlendAndRead = () => {
    setIsBlending(true);
    const combinedWord = selectedTiles.join('');
    
    // First read each tile sequentially
    selectedTiles.forEach((tile, index) => {
      setTimeout(() => {
        playSound(tile);
      }, index * 600);
    });

    // Then read full blended word
    setTimeout(() => {
      playSound(combinedWord);
      setIsBlending(false);
      triggerCelebration();
    }, selectedTiles.length * 600 + 400);
  };

  return (
    <section id="phonics-blender" className="blender-section">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="section-pill-tag highlight-tag">
            <Zap size={16} /> Interactive Demo For Kids & Parents
          </span>
          <h2 className="section-title">
            Try Our Live <span className="gradient-text-yellow">Phonics Sound Lab!</span> 🎧
          </h2>
          <p className="section-subtitle">
            Experience how easy blending sounds is! Click the letter tiles below or pick a preset word to hear synthetic phonics blending live.
          </p>
        </div>

        {/* Lab Card */}
        <div className="blender-card">
          {/* Top Presets bar */}
          <div className="blender-presets">
            <span className="preset-label"><Star size={16} /> Quick Try Preset Words:</span>
            <div className="preset-chips">
              {PRESET_WORDS.map((p) => (
                <button
                  key={p.word}
                  onClick={() => handlePresetSelect(p)}
                  className={`preset-btn ${activeWordData?.word === p.word ? 'preset-active' : ''}`}
                >
                  <span>{p.emoji}</span>
                  <strong>{p.word.toUpperCase()}</strong>
                </button>
              ))}
            </div>
          </div>

          {/* Current Word Display Sandbox */}
          <div className="blender-display-box">
            <div className="tile-slot-wrapper">
              {selectedTiles.length === 0 ? (
                <div className="empty-hint">Tap letters below to start blending...</div>
              ) : (
                selectedTiles.map((tile, idx) => (
                  <div key={idx} className="sound-tile active-tile animate-bounce-mini">
                    <span className="tile-letter">{tile}</span>
                    <button 
                      className="tile-remove" 
                      onClick={() => {
                        const updated = selectedTiles.filter((_, i) => i !== idx);
                        setSelectedTiles(updated);
                        checkWordMatch(updated.join(''));
                      }}
                      title="Remove letter"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Action Bar */}
            <div className="blender-display-actions">
              <button 
                onClick={handleBlendAndRead}
                disabled={selectedTiles.length === 0 || isBlending}
                className="btn-primary blend-speak-btn"
              >
                <Volume2 size={20} className={isBlending ? 'animate-pulse' : ''} />
                <span>{isBlending ? 'Blending Sounds...' : 'Blend & Speak Word!'}</span>
              </button>

              <button 
                onClick={handleClear}
                disabled={selectedTiles.length === 0}
                className="btn-clear"
                title="Clear all tiles"
              >
                <RefreshCw size={18} /> Clear
              </button>
            </div>

            {/* Result Matched Card */}
            {activeWordData && (
              <div className="matched-word-banner">
                <span className="matched-emoji">{activeWordData.emoji}</span>
                <div>
                  <h4 className="matched-word-title">
                    Woohoo! Matched "{activeWordData.word.toUpperCase()}"!
                  </h4>
                  <p className="matched-desc">{activeWordData.meaning}</p>
                </div>
                <div className="sparkle-badge"><Sparkles size={18} /> Great Job!</div>
              </div>
            )}
          </div>

          {/* Letter Sounds Picker Palette */}
          <div className="sound-palette">
            <h4 className="palette-title">Tap Phonics Sound Tiles:</h4>
            <div className="sound-tiles-grid">
              {PHONIC_SOUNDS.map((item) => (
                <button
                  key={item.sound}
                  onClick={() => handleAddTile(item)}
                  className={`palette-tile tile-type-${item.type}`}
                >
                  <span className="palette-sound">{item.sound}</span>
                  <span className="palette-phoneme">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
