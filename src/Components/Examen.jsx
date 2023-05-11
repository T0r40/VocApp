import React, { useState } from 'react';
import "../ComponentsCss/Examen.css";
import { useTranslation } from "react-i18next";

const FileReaderComponent = () => {
  const [lines, setLines] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [t, i18n] = useTranslation('common');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      const linesArray = contents.split('\n');
      setLines(linesArray);
      setAnswers(new Array(linesArray.length).fill(''));
    };

    reader.readAsText(file);
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswer = (index) => {
    const answer = answers[index];
    const [left, right] = lines[index].split(';');

    if (answer && answer.trim().toLowerCase() === right.trim().toLowerCase()) {
      return (
        <span className="checkmark">
          <span></span>
        </span>
      );
    } else {
      return (
        <span className="crossmark">
          <span></span>
        </span>
      );
    }
  };

  return (
    <div className="container">
      <label htmlFor="file-upload" className="file-upload-label">
        {t('Examen.texto1')}
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".txt"
        onChange={handleFileChange}
      />
      <br />
      {lines.map((line, index) => {
        const [left, right] = line.split(';');

        return (
          <div className="form-row" key={index}>
            <span>{left}</span>
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
            {checkAnswer(index)}
          </div>
        );
      })}
    </div>
  );
};

export default FileReaderComponent;

