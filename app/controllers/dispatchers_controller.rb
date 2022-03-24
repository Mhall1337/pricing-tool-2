class DispatchersController < ApplicationController
    def index
        dispatcher = Dispatcher.all
        render json: dispatcher
    end
end
