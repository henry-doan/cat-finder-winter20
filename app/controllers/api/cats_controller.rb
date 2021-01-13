class Api::CatsController < ApplicationController
  before_action :set_cat, except: [:index, :create]

  def index
    render json: current_user.cats
  end

  def show
    render json: @cat
  end

  def create 
    @cat = current_user.cats.new()
    @cat.nombre = params[:nombre]
    @cat.age = params[:age]
    @cat.breed = params[:breed]
    @cat.color = params[:color]
    
    file = params[:file]
    if file && file != ""
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(
          file, 
          public_id: file.original_filename, 
          secure: true
        )
        @cat.avatar = cloud_image['secure_url']
        if @cat.save
          render json: @cat
        else
          render json: { errors: @cat.errors }, status: :unprocessable_entity
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      @cat.avatar = 'https://images.unsplash.com/photo-1548366086-7f1b76106622?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80'
      if @cat.save
        render json: @cat
      else
        render json: { errors: @cat.errors }, status: :unprocessable_entity
      end
    end

  end

  def update
    if @cat.update(cat_params)
      render json: @cat
    else
      render json: { errors: @cat.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @cat.destroy
    render json: { message: 'Cat Released'}
  end

  private
    def set_cat
      @cat = current_user.cats.find(params[:id])
    end

    def cat_params
      params.require(:cat).permit(:nombre, :age, :color, :breed, :file)
    end
end
