require "rake"

namespace :deploy do

  desc "Build locally"
  task :gulp_build do
    system "rm -rf _site"
    system "gulp buildForProduction"
  end

  desc "Generate locally and push to S3"
  task :production => [:gulp_build] do
    message = "Local build success (#{Time.now.utc})"

    system "s3_website push"
  end
end
