require "pry"
class Api::TasksController < Api::BaseController

  respond_to :json

  def index 
    respond_with :api, Task.all
  end

  def show 
    respond_with :api, Task.find(params[:id])
  end

  def create 
    respond_with :api, Task.create(task_params)
  end

  def update 
    respond_with :api, Task.update(params[:id], params[:task])
  end

  def destroy 
    respond_with :api, Task.destroy(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :description)
  end
end
