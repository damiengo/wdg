#!/usr/bin/ruby
#
# Images generation.
#

require 'fileutils'

# Paths
img_path = 'assets/img/'
mairie_path = img_path + 'mairie/'

original_dir = 'original/'
medium_dir = 'medium/'

# Cleaning
if File.directory?(mairie_path + medium_dir)
  FileUtils.rm_r(mairie_path + medium_dir)
end

Dir[mairie_path + original_dir + '*'].each do |img|
  puts img
end

