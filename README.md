# COVID Red and Blue

To update the the website's data, simply push new JSON files to the remote main branch. The following directions assume that you've cloned the repository and are running git commands from the project's root directory. It is assumed that you are running the latest stable version of git. This guide was tested using git 2.28.0.

1. Pull the main branch to be sure you've got the latest code

```
git checkout main
git pull origin main
```

2. Copy the new JSON files into the data directory.

```
cp <path/to/file> public/data/us_records.json
cp <path/to/file> public/data/summary_records.json
```

3. Add and commit your changes. Then tag and push main to the remote repository. Note: Substitute today's date for the date in the example below using the format shown.

```
git add .
git commit -m 'new data'
git tag 2020-10-18
git push --atomic origin main 2020-10-18
```

4. At this point, a Github action will run to update the website. You can monitor the status of the action at https://github.com/seanreads/covidredandblue/actions. Once the action successfully completes (~1 minute), the new data should appear on the website: https://covidredandblue.com

## Troubleshooting

For now, if bad things happen, send an e-mail to sean.reads@gmail.com. :)



