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
    @timestamp    = Time.now.to_i.to_s
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

    out_file = File.new("assets/json/"+name+".json", "w")
    out_file.puts("[")
    files = Dir[gen_path + @original_dir + '*']
    files.each_with_index do |img, index|
      puts img
      img_name = name + index.to_s.rjust(3, '0') + "_" + @timestamp + ".jpg"
      image = MiniMagick::Image.open(img)
      image.resize "1000"
      image.format "jpg"
      image.write gen_path + @medium_dir + img_name
      out_file.puts("\"" + gen_path + @medium_dir + img_name + "\"")
      File.rename(img, gen_path + @original_dir + img_name)
      if index < files.length-1
        out_file.puts(",")
      end
    end
    out_file.puts("]")
  end

end

# Launching
imgPrc = ImageProcess.new
imgPrc.generate_images 'mairie'
imgPrc.generate_images 'eglise'
imgPrc.generate_images 'vin_honneur'
imgPrc.generate_images 'repas'
imgPrc.generate_images 'studio'
imgPrc.generate_images 'photos'
imgPrc.generate_images 'cocktail'
imgPrc.generate_images 'bal'
imgPrc.generate_images 'retour'
