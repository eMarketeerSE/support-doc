# Generate HAR file for support

**To resolve issues happening in your browser while using eMarketeer, support may ask you to generate a HAR file. This file allows our developers to see every detail of what’s happening in your browser when the reported issue occurs.**

When requested to send a HAR file it means that you will make the problem happen again while recording the file. You should go in to eMarketeer to the place the problem is happening and before you reproduce the problem, you start the recording. After the problem is reproduced, you will save the file and send it to us.

#### For Chrome browser

1 – Open Chrome and go to the page where the issue is occurring.

2 – Look for the **⋮** button and select **More Tools > Developer Tools**.

3 –  From the panel that appears, select the **Network** tab. You must keep the menu open while you reproduce the issue.

![](../assets/generate-har-file/SCR-20240522-jbvs.png)

4 – Clear the logs before you start reproducing the problem by clicking the clear button.

![](../assets/generate-har-file/SCR-20240522-jcfi.png)

5 – Look for a round record button in the upper left corner of the tab, and make sure it is red. If it is grey, click the button once to start recording.

![](../assets/generate-har-file/SCR-20240522-jcqt.png)

6 – If it isn’t, check the **Preserve log** box.

![](../assets/generate-har-file/SCR-20240522-jupc.png)

7 – Reproduce the issue while the network requests are recorded.

8 – Click the download button, **Export HAR**, to download, and save the file to your computer: **Save as HAR with Content**.

![](../assets/generate-har-file/SCR-20240522-jdas.png)

9 – Upload the HAR file to your ticket with eMarketeer Support for further investigation.
