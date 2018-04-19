const express = require('express');
const app = express(); //app = an instance of that express server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`up and running on ${PORT}`);
});
//at this point the server is there but not doing anything, thus cannot GET.
app.use(express.static('server/public'));