# How create a custom domain for a heroku app

1. Add custom domain to heroku:
  + Install heroku CLI
  + `heroku login`
  + `heroku apps`
  + `heroku apps:info --app cul-app`
  + `heroku domains --app cul-app`
  + `heroku domains:add --app cul-app www.quodl.uk`
  + `heroku domains --app cul-app`

For teams, must have admin rights, (can't just be a team member), easier to do it on heroku UI.

2. In your domain name provider, alter the `CNAME` record to point to your herokuapp:
  + Go to 'Manage DNS records'
  + Create a `CNAME` record with the name `www` pointing to the herokuapp

![image](https://cloud.githubusercontent.com/assets/16817089/23122083/ba078506-f75a-11e6-87f5-4c2361a8e8f8.png)
