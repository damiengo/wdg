#!/usr/bin/ruby
#
# Images generation.
#

require 'fileutils'
require 'mini_magick'

# Paths
img_path = 'assets/img/'
mairie_path = img_path + 'mairie/'

original_dir = 'original/'
medium_dir = 'medium/'

# Cleaning
if File.directory?(mairie_path + medium_dir)
  FileUtils.rm_r(mairie_path + medium_dir)
end

Dir.mkdir(mairie_path + medium_dir)

Dir[mairie_path + original_dir + '*'].each do |img|
  puts img
  name = File.basename(img)
  image = MiniMagick::Image.open(img)
  image.resize "800"
  image.format "jpg"
  image.write mairie_path + medium_dir + name
end

