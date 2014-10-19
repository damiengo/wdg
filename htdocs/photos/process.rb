#!/usr/bin/ruby
#
# Images generation.
#

require 'fileutils'
require 'mini_magick'

class ImageProcess

  def initialize()
    # Paths
    @img_path     = 'assets/img/'
    @original_dir = 'original/'
    @medium_dir   = 'medium/'
  end

  #
  # Images generation.
  #
  def generate_images(name)
    gen_path = @img_path + name + '/'
    # Cleaning
    if File.directory?(gen_path + @medium_dir)
      FileUtils.rm_r(gen_path + @medium_dir)
    end
    Dir.mkdir(gen_path + @medium_dir)

    Dir[gen_path + @original_dir + '*'].each do |img|
      puts img
      name = File.basename(img)
      image = MiniMagick::Image.open(img)
      image.resize "800"
      image.format "jpg"
      image.write gen_path + @medium_dir + name
    end
  end

end

# Launching
imgPrc = ImageProcess.new
imgPrc.generate_images 'mairie'
