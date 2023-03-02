import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import { Box, Typography, Button } from '@mui/material';

import TestResults from "./TestResults";

const Task1 = () => {
  const [editorValue, setEditorValue] = useState('');
  const [tests, setTests] = useState([]);

  const onEditorChange = (newValue) => {
    setEditorValue(newValue);
  };

  const onTestClick = () => {
    const iframe = document.getElementById('test-output');
    iframe.srcdoc = editorValue;
  };

  function runTests() {
    const h1Regex = /<h1>Hello World<\/h1>/;

    // Evaluate the student's code against the test cases
    const passed = h1Regex.test(editorValue);

    // Create an array of test objects
    const tests = [
      {
        name: "Contains <h1>Hello World</h1>",
        passed: passed,
        error: passed ? "" : "Expected <h1>Hello World</h1> tag was not found",
      },
    ];

    setTests(tests);
  }

  return (
  <Box sx={{ p: '16px', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
  <Box sx={{ flex: '1', padding: '16px' }}>
    <Typography variant="h1" component="h1" sx={{ padding: '16px' }}>HTML</Typography>
    <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>Description</Typography>
    <Typography variant="body1">HELLO WORLD Exercises
      It's time to practice working with HTML. Please add on to the markup to recreate the two words 
      Hello World 
    </Typography>
  </Box>
  <Box sx={{ flex: '1', padding: '16px' }}>
    <Typography variant="h3" sx={{ marginBottom: { xs: '8px', md: '16px' } }}>WRITE YOUR CODE HERE</Typography>
    <AceEditor
      mode="html"
      theme="github"
      name="html-editor"
      width="100%"
      height="400px"
      editorProps={{ $blockScrolling: true }}
      value={editorValue}
      onChange={onEditorChange}
      sx={{ marginBottom: '16px', bgcolor: 'gray', color: 'white' }}
    />
    <Button variant="contained" sx={{ m: '16px' }} onClick={onTestClick}>SEE RESULT</Button>
  </Box>
  <Box sx={{ flex: '1', padding: '16px', display: { xs: 'none', md: 'block' } }}>
    <Button variant="contained" onClick={runTests}>Run Tests</Button>
    <TestResults tests={tests} />
    <iframe id="test-output" title="Test Output" width="100%" height="400px" style={{ backgroundColor: 'darkgray' }}></iframe>
  </Box>
</Box>
  );
};

export default Task1;
