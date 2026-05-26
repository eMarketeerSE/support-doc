# Generate HAR file for support

A HAR file records every network detail in your browser as you reproduce a problem in eMarketeer, which helps support diagnose the issue.

If support asks for a HAR file, open eMarketeer to the place where the problem happens, start the recording, reproduce the issue, then save and send the file.

#### For Chrome browser

1. Open Chrome and go to the page where the issue happens.
2. Click the ⋮ menu and select More Tools > Developer Tools.
3. In the panel that opens, select the Network tab. Keep the panel open while you reproduce the issue.

<div data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jbvs.png" alt="Chrome DevTools Network tab open"></div>

4. Clear the logs before you reproduce the problem by clicking the clear button.

<div data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jcfi.png" alt="clear network logs button in DevTools"></div>

5. Look for the round record button in the upper left corner of the tab. Make sure it is red. If it is grey, click it once to start recording.

<div data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jcqt.png" alt="red record button active in the Network tab"></div>

6. If it isn't, check the Preserve log box.

<div data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jupc.png" alt="Preserve log checkbox in the Network tab"></div>

7. Reproduce the issue while network requests are recorded.
8. Click the download button, Export HAR, and save the file to your computer as HAR with Content.

<div data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jdas.png" alt="Export HAR option in the download menu"></div>

9. Upload the HAR file to your ticket with eMarketeer Support for further investigation.
