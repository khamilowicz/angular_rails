class HomeController < ApplicationController
  respond_to :json

  def index
  end

  def show
    respond_with( {one: "ONE", two: "TWO", three: { oneone: "ONEONE"}})
  end
end
