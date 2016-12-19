require "rake"

namespace :deploy do

  desc "Build locally"
  task :gulp_build do
    system "rm -rf _site"
    system "gulp buildForProduction"

    message = "Local build success (#{Time.now.utc})"
  end

  desc "Generate locally and push to production bucket"
  task :production => [:gulp_build] do
    system "s3_website push --config-dir config/production"
  end

  desc "Generate locally and push to staging bucket"
  task :staging => [:gulp_build] do
    system "s3_website push --config-dir config/staging"
  end
end
