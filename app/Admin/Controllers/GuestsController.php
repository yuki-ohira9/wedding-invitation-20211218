<?php

namespace App\Admin\Controllers;

use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Models\User;

class GuestsController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'ゲスト一覧';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new User);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('name', __('user.name'));
        $grid->column('email', __('user.email'));
        // $grid->column('created_at', __('Created at'));
        // $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed   $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(User::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', __('user.name'));
        $show->field('email', __('user.email'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new User);

        $form->display('id', __('ID'));
        $form->text('name', __('user.name'));
        $form->email('email', __('user.email'));
        // $form->password('password', trans('admin.password'));
        $form->password('password', trans('admin.password'))
            ->rules('required|confirmed')
            ->default(function ($form) {
            return $form->model()->password;
        });
        $form->password('password_confirmation', trans('admin.password_confirmation'))
            ->rules('required')
            ->default(function ($form) {
            return $form->model()->password;
        });
        $form->display('created_at', __('Created At'));
        $form->display('updated_at', __('Updated At'));

        $form->ignore(['password_confirmation']);

        $form->saving(function (Form $form) {
          if ($form->password && $form->model()->password != $form->password) {
            $form->password = bcrypt($form->password);
          }
        });

        return $form;
    }
}
