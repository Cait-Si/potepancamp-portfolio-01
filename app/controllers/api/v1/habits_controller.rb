module Api
  module V1
    class HabitsController < ApplicationController
      def index
        habits = Habit.active
        render json: {
          habits: habits
        }, status: :ok
      end

      def create
        user = User.find_by(email: params[:email])
        habit = Habit.new(
          user_id: user.id,
          title: params[:title],
          detail: params[:detail],
          active: true
        )
        if habit.save
          render json: {
            habit: habit
          }, status: :created
        else
          render json: {}, status: :internal_server_error
        end
      end

      def show
        habit = Habit.find(params[:id])
        render json: {
          habit: habit
        }, status: :ok
      end

      def update
        habit = Habit.find(params[:id])
        if habit.update(title: params[:title], detail: params[:detail], count: params[:count])
          render json: {
            habit: habit
          }, status: :created
        else
          render json: {}, status: :internal_server_error
        end
      end

      def destroy
        habit = Habit.find(params[:id])
        if habit.update(active: false)
          render json: {
            habit: habit
          }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end
    end
  end
end
