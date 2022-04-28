class CarriersController < ApplicationController
    def index
        carriers = Carrier.all
        render json: carriers, status: :created
    end
end
